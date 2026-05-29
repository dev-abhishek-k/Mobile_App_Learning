import {db} from '../../../lib/db'    
type Ctx = {
        params: {
            id: string
        }
}
export async function GET(_request: Request, {params}: Ctx) {
    try{
        const result = await db.execute("SELECT * FROM users_data WHERE id = ?", [params.id])
       
        return Response.json(result.rows, {status: 200})

    }
    catch(error){
        return Response.json({error: "Failed to fetch user"}, {status: 500})
    }
}
export async function PUT(_request: Request, {params}: Ctx) {
    try{

    }
    catch(error){
        
    }
}
export async function DELETE(_request: Request, {params}: Ctx) {
    try{

    }
    catch(error){
        
    }
}