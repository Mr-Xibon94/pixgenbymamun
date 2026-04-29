import PhotoCard from "@/component/PhotoCard";


const AllPhotos = async() => {
    const res = await fetch("https://pixgenbymamun.vercel.app/data.json")
    const photos = await res.json()
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-5">All Photos</h1>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    photos.map(photo=>
                        <PhotoCard key={photo.id} photo={photo}></PhotoCard>
                    )
                }
            </div>
            
            
        </div>
    );
};

export default AllPhotos;