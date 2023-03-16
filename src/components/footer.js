import * as React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'

const Footer = ({ siteTitle }) => (

  <>
  <div className="bg-[#333] fixed bottom-0 left-0 right-0 sm:h-[8vh] lg:h-[5vh]">
  <div className="container mx-auto">
    <div className="bg-[yellow] h-[1px]">
    </div>
    <div className="flex items-center justify-between sm:pt-[2.2vh] lg:pt-[1.5vh]">
      <h1 className="sm:text-lg lg:text-2xl">
        <Link to="/" className="text-[#FFEA00] font-bold uppercase tracking-widest hover:text-[#DBCA08]">
          M O N T Á S
        </Link>
      </h1>
      <ul className="flex justify-around">
        <li className="sm:text-[16px] lg:text-[21px]">
          <Link className="" to="/music/mixes">🎹</Link>
        </li>
        <li className="sm:text-[16px] lg:text-[21px] sm:px-[1.25rem] ... lg:px-8 ...">
          <Link className="" to="/about/">🙍🏾‍♂️</Link>
        </li>
        <li className="sm:text-[16px] lg:text-[21px]">
          <Link className="" to="/contact">✉️</Link>
        </li>
      </ul>
    </div>
  </div>
  </div>
  </>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
