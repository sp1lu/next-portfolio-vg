interface CreditProps {
    role: string;
    name: string;
}

function Credit(props: CreditProps) {
    const { role, name } = props;

    return (
        <div className='credit'>
            <p className='credit__role'>{role}</p>
            <p className='credit__name'>{name}</p>
        </div>
    )
}

export default Credit