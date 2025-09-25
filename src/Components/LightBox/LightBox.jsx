
const Lightbox = ({ imageUrl, onClose }) => {
    if (!imageUrl) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4" onClick={onClose}>
        <div className="relative max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold p-2 z-10"
            onClick={onClose}
            aria-label="Close Lightbox"
          >&times;</button>
          <img src={imageUrl} alt="Enlarged gallery image" className="max-w-full max-h-[85vh] rounded-xl object-contain" />
        </div>
      </div>
    );
  };

    export default Lightbox;