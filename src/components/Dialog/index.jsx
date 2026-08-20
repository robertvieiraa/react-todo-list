import "./dialog.style.css"

export function Dialog() {
	// const dialog = document.querySelector("dialog");

	const openDialog = () => {
		dialog.showModal();
	}

	const closeDialog = () => {
		dialog.close();
	}

	return (
		<>
			<dialog>
				<button autoFocus onClick={closeDialog}>Close</button>
				<p>This modal dialog has a groovy backdrop!</p>
			</dialog>
			<button onClick={openDialog}>Show the dialog</button>
		</>
	)
}