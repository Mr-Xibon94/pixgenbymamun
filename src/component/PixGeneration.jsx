import PhotoCard from "./PhotoCard";


const PixGeneration = async() => {
    const res = await fetch('https://pixgenbymamun.vercel.app/data.json')
    const photos = await res.json();

    const selectedPhotos = photos.slice(0, 8);

    console.log('here all data of photos',selectedPhotos)
    return (
        <div>
            <h1 className="text-2xl font-bold my-5 text-center">Top Generation</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {selectedPhotos.map(photo => 
                <PhotoCard key={photo.id} photo={photo}/>
            )}
            </div>
        </div>
    );
};

export default PixGeneration;