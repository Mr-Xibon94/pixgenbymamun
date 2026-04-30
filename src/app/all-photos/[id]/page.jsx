

const CardDetails = async({params}) => {
    const {id} = await params;
    const res = await fetch('https://pixgenbymamun.vercel.app/data.json')
    const photos = await res.json();

    const photo = photos.find(p => p.id == id)
    return (
        <div>
            {photo.title}
        </div>
    );
};

export default CardDetails;