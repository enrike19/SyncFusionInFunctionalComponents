import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';

const Tabs = () => {

    const headerText = [{ text: "Twitter" }, { text: "Facebook" }, { text: "WhatsApp" }];

    const content0 = () => {
        return <div>
            Twitter is an online social networking service that enables users to send and read short 140-character messages called "tweets". Registered users can read and post tweets, but those who are unregistered can only read them. Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San Francisco and has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey, Evan Williams, Biz Stone, and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity, with more than 100 million users posting 340 million tweets a day in 2012.The service also handled 1.6 billion search queries per day.
        </div>;
    }

    const content1 = () => {
        return <div>
            Facebook is an online social networking service headquartered in Menlo Park, California. Its website was launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford University. It gradually added support for students at various other universities and later to high-school students.
        </div>;
    }
    const content2 = () => {
        return <div>
            WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates under a subscription business model. It uses the Internet to send text messages, images, video, user location and audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US* 9.3 billion.
        </div>;
    }


    const headerTextScroll = [{ text: "HTML" }, { text: "C Sharp(C#)" }, { text: "Java" }, { text: "VB.Net" }, { text: "Xamarin" }, { text: "ASP.NET" }, { text: "ASP.NET MVC" }, { text: "JavaScript" }];

    const content0_scroll = () => {
        return <div>
            HyperText Markup Language, commonly referred to as HTML, is the standard markup
            language used to create web pages. Along with CSS, and JavaScript, HTML is a cornerstone
            technology, used by most websites to create visually engaging web pages, user interfaces
            for web applications, and user interfaces for many mobile applications.[1] Web browsers
            can read HTML files and render them into visible or audible web pages. HTML describes
            the structure of a website semantically along with cues for presentation, making it a
            markup language, rather than a programming language.
        </div>;
    }
    const content1_scroll = () => {
        return <div>
            'C# is intended to be a simple, modern, general-purpose, object-oriented
            programming language. Its development team is led by Anders Hejlsberg. The most recent
            version is C# 5.0, which was released on August 15, 2012.
        </div>;
    }
    const content2_scroll = () => {
        return <div>
            Java is a set of computer software and specifications developed by Sun Microsystems,
            later acquired by Oracle Corporation, that provides a system for developing application
            software and deploying it in a cross-mobile phones to platform computing environment. Java
            is used in a wide variety of computing platforms from embedded devices and enterprise servers
            and supercomputers. While less common, Java applets run in secure, sandboxed environments to
            provide many features of native applications and can be embedded in HTML pages.
        </div>;
    }
    const content3_scroll = () => {
        return <div>
            The command-line compiler, VBC.EXE, is installed as part of the freeware .NET
            Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version
            is VB 2012, which was released on August 15, 2012.
        </div>;
    }
    const content4_scroll = () => {
        return <div>
            Xamarin is a San Francisco, California based software company created in May
            2011[3] by the engineers that created Mono,[4] Mono for Android and MonoTouch that are
            cross-platform implementations of the Common Language Infrastructure (CLI) and Common
            Language Specifications (often called Microsoft .NET). With a C#-shared codebase,developers
            can use Xamarin tools to write native Android, iOS, and Windows apps with native user interfaces
            and share code across multiple platforms.[5] Xamarin has over 1 million developers in more
            than 120 countries around the World as of May 2015.'
        </div>;
    }
    const content5_scroll = () => {
        return <div>
            ASP.NET is an open-source server-side web application framework designed for web
            development to produce dynamic web pages. It was developed by Microsoft to allow programmers
            to build dynamic web sites, web applications and web services. It was first released in January
            2002 with version 1.0 of the .NET Framework, and is the successor to Microsoft\'\s Active Server
            Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing
            programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension
            framework allows ASP.NET components to process SOAP messages.
        </div>;
    }
    const content6_scroll = () => {
        return <div>
            The ASP.NET MVC is a web application framework developed by Microsoft, which implements
            the model–view–controller (MVC) pattern. It is open-source software, apart from the ASP.NET Web
            Forms component which is proprietary. In the later versions of ASP.NET, ASP.NET MVC, ASP.NET web
            API, and ASP.NET Web Pages (a platform using only Razor pages) will merge into a unified MVC 6.
            The project is called ASP.NET vNext.
        </div>;
    }
    const content7_scroll = () => {
        return <div>
            JavaScript (JS) is an interpreted computer programming language. It was originally
            implemented as part of web browsers so that client-side scripts could interact with the
            user, control the browser, communicate asynchronously, and alter the document content that
            was displayed.[5] More recently, however, it has become common in both game development
            and the creation of desktop applications.
        </div>;
    }



    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-12">
                    <b>Default</b>
                    <TabComponent heightAdjustMode='Auto'>
                        <TabItemsDirective>
                            <TabItemDirective header={headerText[0]} content={content0}/>
                            <TabItemDirective header={headerText[1]} content={content1}/>
                            <TabItemDirective header={headerText[2]} content={content2}/>
                        </TabItemsDirective>
                    </TabComponent>
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-12 mt-40">
                    <b className={"mt-40"}>With HTML content</b>
                    <TabComponent id='defaultTab'>
                        <div className="e-tab-header">
                            <div> Twitter </div>
                            <div> Facebook </div>
                            <div> WhatsApp </div>
                        </div>
                        <div className="e-content">
                            <div>
                                Twitter is an online social networking service that enables users to send and read short 140-character messages called 'tweets'. Registered users can read and post tweets, but those who are unregistered can only read them. Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San Francisco and has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey, Evan Williams, Biz Stone, and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity, with more than 100 million users posting 340 million tweets a day in 2012.The service also handled 1.6 billion search queries per day.
                            </div>
                            <div>
                                Facebook is an online social networking service headquartered in Menlo Park, California. Its website was launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website's membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford University. It gradually added support for students at various other universities and later to high-school students.
                            </div>
                            <div>
                                WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates under a subscription business model. It uses the Internet to send text messages, images, video, user location and audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US* 9.3 billion.
                            </div>
                        </div>
                    </TabComponent>
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-5">
                    <b>Header with scroll</b>
                    <TabComponent heightAdjustMode='Auto' overflowMode='Scrollable'>
                        <TabItemsDirective>
                            <TabItemDirective header={headerTextScroll[0]} content={content0_scroll}/>
                            <TabItemDirective header={headerTextScroll[1]} content={content1_scroll}/>
                            <TabItemDirective header={headerTextScroll[2]} content={content2_scroll}/>
                            <TabItemDirective header={headerTextScroll[3]} content={content3_scroll}/>
                            <TabItemDirective header={headerTextScroll[4]} content={content4_scroll}/>
                            <TabItemDirective header={headerTextScroll[5]} content={content5_scroll}/>
                            <TabItemDirective header={headerTextScroll[6]} content={content6_scroll}/>
                            <TabItemDirective header={headerTextScroll[7]} content={content7_scroll}/>
                        </TabItemsDirective>
                    </TabComponent>
                </div>
                <div className={"col-md-1"}></div>
                <div className="col-md-5">
                    <b>Header with scroll</b>
                    <TabComponent heightAdjustMode='Auto' overflowMode='Popup'>
                        <TabItemsDirective>
                            <TabItemDirective header={headerTextScroll[0]} content={content0_scroll}/>
                            <TabItemDirective header={headerTextScroll[1]} content={content1_scroll}/>
                            <TabItemDirective header={headerTextScroll[2]} content={content2_scroll}/>
                            <TabItemDirective header={headerTextScroll[3]} content={content3_scroll}/>
                            <TabItemDirective header={headerTextScroll[4]} content={content4_scroll}/>
                            <TabItemDirective header={headerTextScroll[5]} content={content5_scroll}/>
                            <TabItemDirective header={headerTextScroll[6]} content={content6_scroll}/>
                            <TabItemDirective header={headerTextScroll[7]} content={content7_scroll}/>
                        </TabItemsDirective>
                    </TabComponent>
                </div>
            </div>

        </div>
    );
}

export default Tabs;
