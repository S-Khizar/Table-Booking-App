//app/pages/api/bookTable.js

export async function POST(request) {
    let data = await request.json();
    
    return NextResponse.json({ succes: true, data })

}


  