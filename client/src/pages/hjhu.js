import Modal from "react-modal";

// ...

const [shareModalIsOpen, setShareModalIsOpen] = useState(false);
const [sharedRecipeUrl, setSharedRecipeUrl] = useState("");

const shareRecipe = (recipeUrl) => {
  setSharedRecipeUrl(recipeUrl);
  setShareModalIsOpen(true);
};

return (
  <div>
    {/* ... */}
    <button onClick={() => shareRecipe(getShareableRecipeUrl(recipe._id))}>
      Share
    </button>

    <Modal isOpen={shareModalIsOpen} onRequestClose={() => setShareModalIsOpen(false)}>
      <h2>Share Recipe</h2>
      <p>Copy the link below to share this recipe:</p>
      <input type="text" value={sharedRecipeUrl} readOnly />
      <button onClick={() => setShareModalIsOpen(false)}>Close</button>
    </Modal>
  </div>
);
