"use client"

type props = {
    title: string
}

export function PageTitle({ title }: props) {
    return (
        <div className="content-header">
            <div className="row mb-2">
                <div className="col-sm-6">
                    <h1 className="m-0">{title}</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a className="text-success" href="./">EnviStats</a></li>
                        <li className="breadcrumb-item active">{title}</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}