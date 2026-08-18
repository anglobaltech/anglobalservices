"use client";

export default function ExploreFoodDropdownButton({ className, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    // Dispatch the custom event to open the Navbar dropdown
    window.dispatchEvent(new CustomEvent("open-food-dropdown"));
    // Scroll smoothly to the top of the page so the dropdown is visible
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={handleClick} className={className}>
      {children || "Explore Products"}
    </button>
  );
}
