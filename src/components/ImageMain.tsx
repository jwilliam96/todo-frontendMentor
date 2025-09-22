import imgMobileDark from "../assets/images/bg-mobile-dark.jpg"
import imgDesktopDark from "../assets/images/bg-desktop-dark.jpg"
import imgMobileLight from "../assets/images/bg-mobile-light.jpg"
import imgDesktopLight from "../assets/images/bg-desktop-light.jpg"

export default function ImageMain({ isActive }: { isActive: boolean }) {
    return (
        <picture className='todo__image'>
            {
                isActive ?
                    <>
                        <source media="(min-width: 500px)" srcSet={imgDesktopDark} className="todo__img-desktop" />
                        <img src={imgMobileDark} alt='' className='todo__img' />
                    </>
                    :
                    <>
                        <source media="(min-width: 500px)" srcSet={imgDesktopLight} className="todo__img-desktop" />
                        <img src={imgMobileLight} alt='' className='todo__img' />
                    </>
            }
        </picture>
    )
}
