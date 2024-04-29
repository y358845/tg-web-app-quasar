export function b64EncodeUnicode(str) {
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(
    encodeURIComponent(str).replace(
      /%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode("0x" + p1);
      }
    )
  );
}
//метод добавления файлов где  нужно добавлять вложения
export function addFileInTask(file, files) {
  const arrFiles = files;
  const reader = new FileReader();
  reader.readAsDataURL(file[0]);
  reader.onload = function () {
    let file64 = reader.result;
    fetch(file64).then((res) => {
      res.arrayBuffer().then((buf) => {
        arrFiles.push({
          fileName: file[0].name,
          file: file64
        });
      });
    });
  };
}
