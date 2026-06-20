import { useCart } from "../hooks/useCart";
import { CheckCircle, X } from "lucide-react";

export default function Toast() {
  const { toast, hideToast } = useCart();

  if (!toast) return null;

  return (
    <div
      className={`fixed top-16 right-4 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-lg shadow-lg border transition-all duration-300 ${
        toast.visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
      style={{
        backgroundColor: "#fff",
        borderColor: "#2E7D32",
        minWidth: 280,
      }}
    >
      <CheckCircle size={20} color="#2E7D32" />
      <span className="text-sm font-medium flex-1" style={{ color: "#333" }}>
        {toast.message}
      </span>
      <button
        onClick={hideToast}
        className="p-1 rounded hover:bg-gray-100 transition-colors"
      >
        <X size={14} color="#888" />
      </button>
    </div>
  );
}
