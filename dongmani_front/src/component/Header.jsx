
export default function Header ({title, leftChild, rightChild}) {
    return (
        <div className='Header'>
            <div>{leftChild}</div>
            <div>{title}</div>
            <div>{rightChild}</div>
        </div>
    )
}