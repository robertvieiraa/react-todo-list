import "./dialog.style.css"

export function Dialog() {
	const dialog = document.querySelector("dialog");
	const showButton = document.querySelector("dialog + button");
	const closeButton = document.querySelector("dialog button");

	showButton.addEventListener("click", () => {
		dialog.showModal();
	});

	closeButton.addEventListener("click", () => {
		dialog.close();
	});

	return (
		<>
			<dialog>
				<button autoFocus>Close</button>
				<p>This modal dialog has a groovy backdrop!</p>
			</dialog>
			<button>Show the dialog</button>
		</>
	)
}