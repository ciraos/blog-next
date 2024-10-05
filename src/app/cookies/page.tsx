import Link from "next/link";
import Aside from "@/components/aside";
import type { Metadata } from "next";

export const metadata:Metadata = {
    icons: "/ciraos.webp",
    title: "cookies - 葱苓sama",
}

export default function Cookies() {
    return (
        <>
            <div className="w-full max-w-6xl py-[40px] px-[15px] mx-auto flex max-768:flex-col">
                <div className="main-container w-3/4 bg-white rounded-xl px-2 py-2 max-768:w-full">
                    <div className="text-5xl text-gray-500 font-semibold py-5 px-5">Cookies</div>

                    <h2>更新日期</h2>
                    <p>本政策的最近更新日期为：<strong>2024-09-22</strong></p>
                    <p>为了确保网站和我开发的软件的可靠性、安全性和个性化，我使用 Cookies。当你接受 Cookies 时，这有助于通过识别你的身份、记住你的偏好或提供个性化用户体验来帮助我改善网站。</p>
                    <p>本政策应与<Link href="/privacy">隐私政策</Link>一起阅读，该隐私政策解释了我如何使用个人信息。</p>
                    <p>如果你对我使用你的个人信息或 Cookies 的方式有任何疑问，请通过<Link href="mailto:ciraos@yeah.net">E-mail</Link>与我联系。</p>
                    <p>如果你想管理你的Cookies，请按照下面“如何管理Cookies部分中的说明进行操作。</p>
                    
                    <h2>什么是Cookies？</h2>
                    <p>Cookies 是一种小型文本文件，当你访问网站时，网站可能会将这些文件放在你的计算机或设备上。Cookies 会帮助网站或其他网站在你下次访问时识别你的设备。网站信标、像素或其他类似文件也可以做同样的事情。我在此政策中使用术语“Cookies”来指代以这种方式收集信息的所有文件。</p>
                    <p>Cookies 提供许多功能。例如，他们可以帮助我记住你喜欢深色模式还是浅色模式，分析我网站的效果。</p>
                    <p>大多数网站使用 Cookies 来收集和保留有关其访问者的个人信息。大多数 Cookies 收集一般信息，例如访问者如何到达和使用我的网站，他们使用的设备，他们的互联网协议地址（IP 地址），他们正在查看的页面及其大致位置（例如，我将能够认识到你正在从长沙访问我的网站）。</p>

                    <h2>Cookies 的目的</h2>
                    <p>我将 Cookies 分为以下类别:</p>
                    <ul>
                        <li><strong>授权：</strong>你访问我的网站时，我可通过 Cookie 提供正确信息，为你打造个性化的体验。例如：Cookie 会告知你通过搜索引擎搜索的具体内容来改善文章的标题优化关键词、或者创建更符合你搜索需求的文章内容。</li>
                    </ul>
                    <ul>
                        <li><strong>安全措施：</strong>我通过 Cookie 启用及支持安全功能，监控和防止可疑活动、欺诈性流量和违反版权协议的行为。</li>
                    </ul>
                    <ul>
                        <li><strong>偏好、功能和服务：</strong>我使用功能性 Cookies 来让我记住你的偏好，或保存你向我提供的有关你的喜好或其他信息。</li>
                    </ul>
                    <ul>
                        <li><strong>个性化广告：</strong>本站涉及 GoogleADS 个性化广告服务</li>
                    </ul>
                    <ul>
                        <li><strong>网站性能、分析和研究：</strong>我使用这些 cookie 来监控网站性能。这使我能够通过快速识别和解决出现的任何问题来提供高质量的体验。</li>
                    </ul>

                    <h2>我的网站上的第三方 Cookies</h2>
                    <p>我还在我的网站上使用属于上述类别的第三方 Cookies，用于以下目的：</p>
                    <ul>
                        <li>帮助我监控网站上的流量；</li>
                        <li>识别欺诈或非人为性流量；</li>
                        <li>协助市场调研；</li>
                        <li>改善网站功能；</li>
                        <li>监督我的版权协议和隐私政策的遵守情况。</li>
                        <li><strong>baidu.com </strong>用于统计站内访问情况，进行针对性优化</li>
                        <li><strong>ibruce.info </strong>busuznzi 统计，用于区分访问 pv 数量和 uv 数量，在文章处展示人气</li>
                    </ul>

                    <h2>如何管理 Cookies？</h2>
                    <p>在将 Cookie 放置在你的计算机或设备上之前，系统会显示一个弹出窗口，要求你同意设置这些 Cookie。通过同意放置 Cookies，你可以让我为你提供最佳的体验和服务。如果你愿意，你可以通过浏览器设置关闭本站的 Cookie 来拒绝同意放置 Cookies；但是，我网站的部分功能可能无法完全或按预期运行。你有机会允许和/或拒绝使用 Cookie。你可以通过访问浏览器设置随时返回到你的 Cookie 偏好设置以查看和/或删除它们。 </p>
                    <p>除了我提供的控件之外，你还可以选择在 Internet 浏览器中启用或禁用 Cookie。大多数互联网浏览器还允许你选择是要禁用所有 Cookie 还是仅禁用第三方 Cookie。默认情况下，大多数互联网浏览器都接受 Cookie，但这可以更改。有关详细信息，请参阅 Internet 浏览器中的帮助菜单或设备随附的文档。</p>
                    <p>以下链接提供了有关如何在所有主流浏览器中控制 Cookie 的说明：</p>
                    <ul>
                        <li>
                            <Link href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer">Google Chrome</Link>
                        </li>
                        <li>
                            <Link href="https://support.microsoft.com/en-us/help/260971/description-of-cookies" target="_blank" rel="noopener noreferrer">IE</Link>
                        </li>
                        <li>
                            <Link href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari（mac 桌面版）</Link>
                        </li>
                        <li>
                            <Link href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer">Safari（移动版）</Link>
                        </li>
                        <li>
                            <Link href="https://support.mozilla.org/en-US/kb/Cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">火狐浏览器</Link>
                        </li>
                        <li>
                            <Link href="http://support.google.com/ics/nexus/bin/answer.py?hl=en&answer=2425067" target="_blank" rel="noopener noreferrer">Android 浏览器</Link>
                        </li>
                    </ul>

                    <p>如你使用其他浏览器，请参阅浏览器制造商提供的文档。有关 Cookies 以及如何管理 Cookies 的更多信息，请访问：<Link href="https://zh.wikipedia.org/wiki/Cookie" target="_blank" rel="noopener noreferrer">wikipedia.org</Link>、
                    <Link href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">allaboutCookies.org</Link> 或 
                    <Link href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer">aboutCookies.org</Link></p>

                    <h2>更多信息</h2>
                    <p>有关我数据处理的更多信息，请参阅我的<Link href="/privacy">隐私政策</Link>。如果你对此 Cookie 政策有任何疑问，请通过<Link href="mailto:ciraos@yeah.net">E-mail</Link>与我联系。</p>

                    <h2>对此 Cookie 政策的更改</h2>
                    <p>我可能对此 Cookie 政策所做的任何更改都将发布在此页面上。如果更改很重要，我会在我的主页或应用上明确指出该政策已更新。</p>
                </div>
                <div className="w-1/4 pl-4 max-768:w-full max-768:pl-0"><Aside /></div>
            </div>

        </>
    )
}
