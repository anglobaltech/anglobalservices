"use client";

import { useState } from "react";
import { doc, runTransaction, serverTimestamp } from "firebase/firestore";
import { db } from "@/src/lib/firebase";

export default function useEnquiryForm() {
  const initialState = {
    name: "",
    industry: "",
    email: "",
    phone: "",
    comment: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialState);
    setIsSubmitted(false);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const counterRef = doc(db, "counters", "enquiries");
      let newDocId = "";

      await runTransaction(db, async (transaction) => {
        const snap = await transaction.get(counterRef);
        const current = snap.exists() ? snap.data().current || 0 : 0;
        const next = current + 1;

        newDocId = `AN${String(next).padStart(5, "0")}`;

        transaction.set(counterRef, { current: next }, { merge: true });
        transaction.set(doc(db, "enquiries", newDocId), {
          ...formData,
          createdAt: serverTimestamp(),
          status: "new",
          source: "website",
        });
      });

      await fetch("/api/send-enquiry-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enquiryId: newDocId,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          industry: formData.industry,
          comment: formData.comment,
          source: "website",
        }),
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    isSubmitted,
    resetForm,
  };
}
