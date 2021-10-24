
//ファイルシステムの利用が可能かどうか
export function isFileSystemSupported() {
	// eslint-disable-next-line no-undef
	return "showOpenFilePicker" in window;
}
