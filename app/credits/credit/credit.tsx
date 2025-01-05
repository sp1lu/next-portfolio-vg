import style from './credit.module.css'

interface CreditProps {
    role: string;
    name: string;
}

function Credit(props: CreditProps) {
    const { role, name } = props;

    return (
        <div className={style.credit}>
            <p className={style.credit__role}>{role}</p>
            <p className={style.credit__name}>{name}</p>
        </div>
    )
}

export default Credit