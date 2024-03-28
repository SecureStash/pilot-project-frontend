import { Facebook, GitHub, Instagram, Telegram, Twitter } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import './home.css'
import { useEffect, useRef, useState } from "react";
import { delay, motion, useAnimate, useAnimation, useInView, useScroll } from "framer-motion";

export default function Home() {
    const containerRef = useRef()
    const isInView = useInView(containerRef, { once: true })
    const mainControls = useAnimation()
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])
    const keyFeatures = [
        {
            title: 'Craft your token',
            description: 'Our token factors offers a tailored experience, enabling you to design and create custom tokens that embody your vision and purpose',
            image: require('../assets/icon logo/CREATE TOKENS.png')
        },
        {
            title: 'Maximize Rewards With ATWS',
            description: `Our platform elevates staking with a precision-engineered, 
        aggregated time- weighted staking(ATWS) system, rewarding your long - term commitment. 
        Our Token Staking framework is designed to amplify your commitment, offering sophisticated 
        rewards that grow with your stake period.`,
            image: require('../assets/icon logo/STAKE TOKENS.png')
        },
        {
            title: 'Secure Your Commitment',
            description: `
            With Token Locks, we safeguard the integrity of your team's 
        dedication, instilling trust, stability, and longevity by preserving team tokens until they mature.`,
            image: require('../assets/icon logo/LOCK TOKENS.png')
        }, {
            title: 'Strategize Your Token Release',
            description: `Foster investor confidence with Token Vesting. Our service 
            guarantees that your tokens are allocated according to a meticulously pre-defined schedule, 
            demonstrating a steadfast commitment to transparency and fostering trust in your project's 
            consistent growth and reliable expansion.`,
            image: require('../assets/icon logo/TOKEN GOVERNANCE.png')
        }, {
            title: 'Decentralized Decision-Making:',
            description: `At the heart of our ecosystem is Token Governance, a 
            democratic realm where holders of our native tokens govern the ecosystem, casting votes on 
            pivotal parameter changes, ensuring that every voice is pivotal in steering the course of token 
            evolution.`,
            image: require('../assets/icon logo/VEST TOKENS.png')
        }, {
            title: 'Transfer With Trust',
            description: `Our Decentralized P2P Transfer system redefines security, enabling 
            seamless and safe peer-to-peer transactions, preserving the integrity of every transaction.`,
            image: require('../assets/icon logo/CREATE TOKENS.png')
        }
    ]
    const members = [
        { name: 'Vimal', role: 'Visionary', image: require('../assets/members/Visionary.png') },
        { name: 'Vijay', role: 'Code Wizard', image: require('../assets/members/Code_Wizard.png') },
        { name: 'Mano', role: 'Web3 Craftsman', image: require('../assets/members/Web3 Craftsman.png') },
        { name: 'Akash', role: 'Web Artisan', image: require('../assets/members/Web_Artisan.png') },
        { name: 'Karthik', role: 'Design Architect', image: require('../assets/members/Graphic_Designer.png') }
    ]
    return (
        <Grid container style={{ margin: '50px 0px 0px 0px', padding: 20 }} >
            <Grid container>
                <Grid item xs={7} style={{ margin: '20px 0px 0px 0px', padding: '100px 0px 0px 0px' }}>
                    <Typography variant="h2" fontFamily="LogoFont" color='whitesmoke'> Secure Stash: The Gateway to Token Security</Typography>
                    <Typography variant="h5" fontFamily='RegularFont' color='whitesmoke'>
                        Our mission is to empower individuals worldwide by providing a stable and secure environment for managing your own crypto assets.
                        Step into a world where  your digital asset endeavours are limitless.
                        With Secure Stash, you are not just creating a token; you are empowering your future.
                    </Typography>
                </Grid>
                <Grid item xs={5} textAlign={'center'}>
                    <div>
                        <div
                            style={{
                                position: 'absolute',
                                margin: '15% 20% 0px 0px',
                                padding: '15px 15px 15px 15px',
                                backgroundColor: '#1E2738DE'
                            }}>
                            <img
                                decoding="async" width="100%" height="100%"
                                src="https://cryptoz.iamabdus.com/free/wp-content/uploads/2022/07/Group-23-1-1.png"
                                class="attachment-full size-full wp-image-4147" alt
                            >
                            </img>
                        </div>
                        <div style={{
                            position: 'absolute',
                            margin: '15% 0px 0px 25%',
                            padding: '20px 20px 20px 0px',
                            backgroundColor: '#1E2738DE'
                        }}>
                            <img loading="lazy" decoding="async" width="80%" height="60%"
                                src="https://cryptoz.iamabdus.com/free/wp-content/uploads/2022/04/cryptoz.png"
                                class="attachment-full size-full wp-image-2803" alt></img>
                        </div>
                        <img
                            loading="lazy" decoding="async" width="70%" height="5%"
                            src="https://cryptoz.iamabdus.com/free/wp-content/uploads/2021/09/Pro-Max.png.webp"
                            class="attachment-full size-full wp-image-181" alt
                            srcset="https://cryptoz.iamabdus.com/free/wp-content/uploads/2021/09/Pro-Max.png.webp 468w, https://cryptoz.iamabdus.com/free/wp-content/uploads/2021/09/Pro-Max-156x300.png.webp 156w" sizes="(max-width: 468px) 100vw, 468px">
                        </img>
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ padding: '120px 0px 40px' }}>
                <Typography variant="h3" fontFamily="LogoFont" color='whitesmoke' align='center' className="hoverColor"> Key Features</Typography>
            </Grid>


            <Grid container gap={2}>
                {keyFeatures.map(key => (
                    <Grid item xs={3.8} border='2px solid #2D3748' borderRadius={5} padding={'35px 35px 35px 35px'} sx={{ backgroundColor: '#2D3748' }}>
                        <img src={key.image} width='50%' height='40%' />
                        <Typography variant="h5" fontFamily="HeaderFont" color='whitesmoke' align="left"> {key.title}</Typography>
                        <Typography variant="body2" fontFamily='RegularFont' color={'whitesmoke'} padding='5'>{key.description}</Typography>
                    </Grid>
                ))}
            </Grid>
            <Grid container sx={{ padding: '120px 0px 0px 0px' }}>
                <Grid item xs={6} paddingRight={5} paddingTop={5}>
                    <Typography variant="h5" fontFamily="fantasy" color='GrayText' className="hoverColor"> ABOUT US</Typography>
                    <Typography variant="h3" fontFamily="LogoFont" color='whitesmoke' className="hoverColor"> Who Are We?</Typography>
                    <Typography variant="overline" fontFamily="RegularFont" color='whitesmoke' align="left">
                        We are a diverse collective of thinkers, innovators, and dreamers, much like yourself. United by a
                        shared vision for decentralization, we stand shoulder to shoulder with you at the forefront of this
                        financial renaissance. Our roots are deeply embedded in the very community we serve; we are its
                        reflection, its aspirations, and its potential.
                    </Typography>
                    <Typography variant="overline" color='whitesmoke' align="left">
                        Together, we are redefining the boundaries of decentralization, reshaping the framework of collective
                        decision-making. Each one of us carries the flame of innovation, lighting the way towards a future
                        where empowerment and decentralized systems take precedence. In an ecosystem widespread with
                        complexity and distrust, we bring simplicity and inclusivity. We believe that access to authentic and
                        secure projects should be straightforward and universal.
                    </Typography>
                </Grid>
                <Grid item xs={6} marginTop='50px'>
                    <img loading="lazy" decoding="async" width="100%" height="100%"
                        src="https://cryptoz.iamabdus.com/free/wp-content/uploads/2021/09/Group-1897.png.webp"
                        class="attachment-full size-full wp-image-311"
                        alt srcset="https://cryptoz.iamabdus.com/free/wp-content/uploads/2021/09/Group-1897.png.webp 785w, https://cryptoz.iamabdus.com/free/wp-content/uploads/2021/09/Group-1897-300x196.png.webp 300w, https://cryptoz.iamabdus.com/free/wp-content/uploads/2021/09/Group-1897-768x503.png.webp 768w"
                        sizes="(max-width: 785px) 100vw, 785px"></img>
                    {/* <div style={{ margin: '-250px -50px 0px 450px', }}>
                        <img loading="lazy" decoding="async" width="70%" height="5%"
                            style={{ backgroundColor: '#1E2738DE', padding: '20px 20px 20px 20px', }}
                            src="https://cryptoz.iamabdus.com/free/wp-content/uploads/2022/07/Group-211-1.png"
                            class="attachment-full size-full wp-image-4151" alt></img>
                    </div> */}
                </Grid>
            </Grid>
            <Grid container sx={{ padding: '120px 0px 0px 0px' }}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" fontFamily="LogoFont" color='GrayText' align="center" className="hoverColor"> MEET OUR TEAM</Typography>
                    <Typography variant="h3" fontFamily="LogoFont" color='whitesmoke' align="center" className="hoverColor"> OUR MOTIVATED TEAM</Typography></Grid>
                <Grid item xs={12}>
                    <Grid container>
                        {members.map(mem => (
                            <Grid item xs={2.4} padding={5} className="hoverColor">
                                <div style={{ textAlign: 'center' }}>
                                    <img src={mem.image} width='100%' height='100%' />
                                </div>
                                <Typography className="hoverColor" variant="h3" fontFamily="fantasy" color='whitesmoke' align="center">
                                    {mem.name}
                                </Typography>
                                <Typography className='hoverColor' variant="h6" fontFamily="fantasy" color='GrayText' align="center">
                                    {mem.role}
                                </Typography>
                                <Typography align="center" >
                                    <IconButton className="icon" ><Instagram className="hoverColor" sx={{ color: 'whitesmoke' }} /></IconButton>
                                    <IconButton className="icon"><Facebook className="hoverColor" sx={{ color: 'whitesmoke' }} /></IconButton>
                                    <IconButton className="icon"><Twitter className="hoverColor" sx={{ color: 'whitesmoke' }} /></IconButton>
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{ padding: '120px 0px 0px 0px' }}>
                <Grid item xs={12}>
                    <Typography className="hoverColor" variant="h3" fontFamily="LogoFont" color='whitesmoke' align="center"> SOCIALS</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12} padding={5}>
                            <Typography align="center" >
                                <IconButton className="icon" onClick={() => window.location.replace('https://twitter.com/SecureStash')}><Twitter className="hoverColor" sx={{ color: 'whitesmoke' }} /></IconButton>
                                <IconButton className="icon" onClick={() => window.location.replace('https://t.co/GkfEoOIqeD')}><Telegram className="hoverColor" sx={{ color: 'whitesmoke' }} /></IconButton>
                                <IconButton className="icon" onClick={() => window.location.replace('https://github.com/SecureStash')}><GitHub className="hoverColor" sx={{ color: 'whitesmoke' }} /></IconButton>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}