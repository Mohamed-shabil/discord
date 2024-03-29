import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";




export async function DELETE(
    req:Request,
    { params } : { params: { serverId : string} }
){


    try{
        const profile = await currentProfile();

        if(!profile){
            return new NextResponse("Unautherized",{status:401});
        }

        const server = await db.server.delete({
            // finding data
            where:{
                id:params.serverId,
                profileId : profile.id,
            }
        })
        return NextResponse.json(server)
    }
    catch(error){
        console.log("[SERVER_ID_DELETE]",error);
        return new NextResponse("Internal Error",{ status:500 });
    }
}





export async function PATCH(
    req:Request,
    { params } : { params: { serverId : string} }
){


    try{
        const profile = await currentProfile();
        const { name, imageUrl } = await req.json();

        if(!profile){
            return new NextResponse("Unautherized",{status:401});
        }

        const server = await db.server.update({
            // finding data
            where:{
                id:params.serverId,
                profileId : profile.id,
            },
            // updating data
            data:{
                name,
                imageUrl, 
            }
        })
        return NextResponse.json(server)
    }
    catch(error){
        console.log("[SERVER_ID_PATCH]",error);
        return new NextResponse("Internal Error",{ status:500 });
    }
}