import './WhyChooseSectionStyle.css'
import party from '../../assets/party.png';
import friendship from '../../assets/friendship.png';
import mortarboard from '../../assets/mortarboard.png';
import dollar from '../../assets/dollar.png';
import remote_control from '../../assets/remote_control.png';
import trophy from '../../assets/trophy.png';

import WhyChoose_Card from './WhyChoose_Card';

export default function WhyChooseSection() {

    let cardData = [
        {
            id: 1,
            image: party,
            card_title: "Epic University Events",
            card_description: "Access to the biggest and best freshers events across the UK. Fromclub nights to cultural festivals, comedy shows to sports events, we've got it all covered for your university experience."
        },
        {
            id: 2,
            image: friendship,
            card_title: "Amazing Student Communities",
            card_description:
                "Connect with like-minded students and join societies that match your interests. Build friendships that last a lifetime through our extensive network of university groups and societies."
        },
        {
            id: 3,
            image:  mortarboard,
            card_title: "University Support & Guidance",
            card_description:
                "Get insider tips, academic support, and guidance to make the most of your university experience from day one. Our comprehensive guides cover everything from freshers week to graduation."
        },
        {
            id: 4,
            image: dollar,
            card_title: "Exclusive Student Discounts",
            card_description:
                "Exclusive deals and discounts on events, food, shopping, and entertainment. Save money while having the best university experience with our partner offers and student deals."
        },
        {
            id: 5,
            image: remote_control,
            card_title: "Easy Event Booking",
            card_description:
                "Simple online booking system for all events and activities. Never miss out on the experiences you want with our user-friendly platform and instant booking confirmations."
        },
        {
            id: 6,
            image: trophy,
            card_title: "Trusted Freshers Guide",
            card_description:
                "The UK's most trusted freshers guide with years of experience helping students make the most of university life. Join over 500,000 students who trust us for their university journey."
        }
    ]

    return (
        <div className='bg-color' id="why-choose">
            <div className='hero-container p-3 '>
                <p className='whychoose-title text-center pt-5 mb-5'>WHY CHOOSE UK FRESHERS GUIDE?</p>

                <WhyChoose_Card cardData={cardData} />

            </div>
        </div>
    );
}