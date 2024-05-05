export const urlToFile = (url, fileName, setImg) => {
      fetch(url).then(async (response) => {
            const contentType = response.headers.get("content-type");
            const blob = await response.blob();
            const file = new File([blob], fileName, { contentType });
            setImg(file);
            // access file here
            return file;
      });
};
