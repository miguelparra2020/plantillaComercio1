import Image from 'next/image'
const Logo = ({ className = '', ...props }) => (
  <Image
    className={'Logo'}
    src="/icon.png"
    alt={'Logo'}
    width={32}
    height={32}
  />
)

export default Logo
