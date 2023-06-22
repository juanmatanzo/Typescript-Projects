import s from '../styles/ContactMe.module.css'
import Gmail from '../assets/icons/gmail.png'
import Linkedin from '../assets/icons/linkedin.png'
import Github from '../assets/icons/github.png'

export const ContactMe: React.FC = () => {
  return (
      <div className={s.footer}>
          <footer className={s.flex}>
            <a href="https://www.linkedin.com/in/juan-cruz-matanzo-876a60225" className={s.icon}><img src={Linkedin} alt="Linkedin" className={s.icon}/></a><br/>
            <a href="https://github.com/juanmatanzo" className={s.icon}><img src={Github} alt="Github" className={s.icon}/></a><br/>
            <a href="mailto:jcmatanzo@gmail.com"><img src={Gmail} alt="Gmail" className={s.icon}/></a><br/>
          </footer>
        </div>
  )
}
