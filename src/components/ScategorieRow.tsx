"use client"

type props = {
  id: string
  code: string
  description: string | null
  num: number
  categorieId: string
  local: string
  deleteScategorie: (id: string) => void
}

export async function ScategorieRow({ id, code, description, num, categorieId, local, deleteScategorie }: props) {
  
  return (
    <tr>
      <td>{num+1}</td>
      <td>{code}</td>
      <td>{categorieId}</td>
      <td>{local}</td>
      <td>{description}</td>
      <td>
        <button onClick={e => deleteScategorie(id)} className='btn btn-sm btn-dark delete-btn'><i className='fas fa-trash mr-1' aria-hidden='true'></i> Supprimer</button>
      </td>
    </tr>
  )
}