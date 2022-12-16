export const organizationTypeSelection = (organizationType:any, perpage: number, pageNumber:number) => {

    const organizationPerPage = perpage
    const pagesVisited = pageNumber * organizationPerPage

    const displayOrganizations = organizationType
        .slice(pagesVisited, pagesVisited + organizationPerPage)
        .map((organization:any) => {
                return <table key={organization.id} className='section-4__table'>
                <tbody>
                    <tr>
                        <td className='section-4__td'>
                <p className='section-4__pLarge'>{organization.type} {organization.name}</p>
                <p className='section-4__pSmall'>Cel i misja: {organization.goals}</p>
                </td>
                <td className='td__right'>{organization.stuff}</td>
                    </tr>
                    </tbody>
                    </table>
            }
        )
    return displayOrganizations
}