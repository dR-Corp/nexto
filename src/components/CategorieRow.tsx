"use client"

type props = {
  id: string
  code: string
  description: string | null
  num: number
  deleteCategorie: (id: string) => void
}

export function CategorieRow({ id, code, description, num, deleteCategorie }: props) {
  return (
    <tr>
      <td>{num+1}</td>
      <td>{code}</td>
      <td>{description}</td>
      <td>
        <button onClick={e => deleteCategorie(id)} className='btn btn-sm btn-dark delete-btn'><i className='fas fa-trash mr-1' aria-hidden='true'></i> Supprimer</button>
      </td>
    </tr>
  )
}
