import React from 'react'
import LogoBtn from '../../../app/common/navigation/LogoBtn'
import EnvelopeSVG from '../../../app/common/svgs/EnvelopeSVG'
import LocationSVG from '../../../app/common/svgs/LocationSVG'
import ProfileSVG from '../../../app/common/svgs/ProfileSVG'
import PhoneSVG from '../../../app/common/svgs/PhoneSVG'

export default function ContactDetails() {
  return (
    <div className="flex flex-col justify-center md:justify-start md:items-start md:flex-grow md:m-0">
    <div className="flex py-3">
      <div className="pr-3">
        <LocationSVG />
      </div>

      <p>Dublin, Ireland</p>
    </div>

    <div className="flex items-center py-3">
      <div className="pr-3">
        <EnvelopeSVG />
      </div>
      <p>rhiannon@gmail.com</p>
    </div>

    <div className="flex items-center py-3">
      <div className="pr-3">
      <PhoneSVG/>
      </div>
      <p>086 1234567</p>
    </div>

    <div className="flex items-center py-3">
      <div className="pr-3">
        <ProfileSVG />
      </div>
      <p className="hover:text-yellow-500 underline cursor-pointer">
        My Resumé
      </p>
    </div>
    <div className="flex my-12">
      <LogoBtn />
    </div>
  </div>
  )
}
