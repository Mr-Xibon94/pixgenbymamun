import PhotoCard from "./PhotoCard";


const PixGenaration = async() => {
    const res = await fetch('https://pixgenbymamun.vercel.app/data.json')
    const photos = await res.json();

    const selectedPhotos = photos.slice(0, 8);

    console.log('here all data of photos',selectedPhotos)
    return (
        <div>
            {selectedPhotos.map(photo => 
                <PhotoCard key={photo.id} photo={photo}/>
            )}
        </div>
    );
};

export default PixGenaration;