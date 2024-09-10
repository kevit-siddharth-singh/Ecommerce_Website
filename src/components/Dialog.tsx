import ProfileForm from "./ProfileForm";

const Dialog = () => {
  return (
    <div className="">
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_2" className="modal  ">
        <div className="modal-box max-sm:py-1  max-sm:h-1/3">
          <ProfileForm />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Dialog;
