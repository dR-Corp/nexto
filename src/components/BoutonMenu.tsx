"use client"

export function ButtonMenu() {
    return (
        <div className="row mb-4">
            <div className="col-sm-8">
                <div className="btn-group btn-group-justified justify-content-between">
                    <button className="btn btn-disabled btn-flat px-3 font-weight-bold">
                        <i className="fas fa-table mr-2"></i>
                        Table view
                    </button>
                    <button className="btn btn-info btn-flat px-3 font-weight-bold">
                        <i className="fas fa-list mr-2"></i>
                        List view
                    </button>
                    <button className="btn btn-secondary btn-flat px-3 font-weight-bold">
                        <i className="fas fa-list mr-2"></i>
                        Grid view
                    </button>
                </div>
            </div>
            <div className="col-sm-4 text-right">
                <button type="button" id="addBtn" className="btn btn-sm btn-info px-3 font-weight-bold" data-toggle="modal" data-target="#addModal">
                    <i className="fas fa-plus mr-2"></i>
                    Ajouter
                </button>
            </div>
        </div>
    )
}