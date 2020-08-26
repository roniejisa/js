const [imgData, setImgData] = useState([]);
    const getFileMetadata = file => {
        return {
          lastModified: file.lastModified,
          name: file.name,
          size: file.size,
          type: file.type,
          webkitRelativePath: file.webkitRelativePath
        }
      }

    const onChangePicture = e => {
        let newstate = [];
        for (let i = 0; i < e.target.files.length; i++) {
          let file = e.target.files[i];
          img.push(file);
          let metadata = getFileMetadata(file);
        //   console.log(metadata)
          let url = URL.createObjectURL(file);
        //   console.log(url);
          newstate = [...newstate, { url, metadata }];
        }
        setImgData(newstate);
      };

return (

<input type="file" name="image" id="GalleriesImg" multiple onChange={onChangePicture} max={5} className="form-control" ref={register({ required: true})} placeholder="Ảnh..." />
{imgData.map((img,key) =>(
      <img src={img.url} key={key} />
  ))}
)