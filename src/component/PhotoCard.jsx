import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";


const PhotoCard = ({ photo }) => {
    return (
        <Card className="border  rounded-xl">
            <div className="relative w-full  aspect-square">
                <Image
                    src={photo.imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={photo.title}
                    className="rounded-xl object-cover"
                />
                <Chip size="sm" className="absolute right-2 top-2 ">
                    {photo.category}
                </Chip>
            </div>
            <div>
                {photo.title}
            </div>
            <div className="flex gap-5">
                <div>
                    {photo.likes}
                </div>
                <Separator orientation="vertical" />
                <div>
                    {photo.downloads}
                </div>
            </div>
            <Button variant="outline" className="w-full">View</Button>
        </Card>
    );
};

export default PhotoCard;