import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Aside from "@/components/aside";

export const metadata:Metadata = {
  icons: "/ciraos.webp",
  title: "隐私协议 - 葱苓sama",
}

export default function Privacy(){
    return (
        <>
            <div className="w-full max-w-6xl py-[40px] px-[15px] mx-auto flex max-768:flex-col">
                <div className="main-container w-3/4 bg-white rounded-xl px-2 py-2 max-768:w-full">
                    <div className="text-5xl text-gray-500 font-semibold py-5 px-5">隐私协议</div>

                    <p>本站非常重视用户的隐私和个人信息保护。你在使用网站时，可能会收集和使用你的相关信息。通过《隐私政策》向你说明在你访问<Link href="https://blog.ciraos.top" className="mx-1 text-miku-green after:content-['_↗'] no-underline hover:underline underline-offset-2">blog.criaos.top</Link>网站时，如何收集、使用、保存、共享和转让这些信息。</p>

                    <h2>最新更新时间</h2>
                    <p>协议最新更新时间为：<strong>2024-09-22</strong></p>

                    <h2>一、在访问时如何收集和使用你的个人信息</h2>

                      <h3>在访问时，收集访问信息的服务会收集不限于以下信息：</h3>
                      <ul>
                        <li><strong>网络身份标识信息</strong> （浏览器UA、IP地址）</li>
                      </ul>
                      <ul>
                        <li><strong>设备信息</strong></li>
                      </ul>
                      <ul>
                        <li><strong>浏览过程</strong>（操作方式、浏览方式与时长、性能与网络加载情况）。</li>
                      </ul>

                      <h3>在访问时，本站内置的第三方服务会通过以下或更多途径，来获取你的以下或更多信息：</h3>
                      <ul>
                          <li><strong>百度统计工具</strong>会收集你的访问信息、访问操作过程</li>
                          <li><strong>51la统计工具</strong>会收集你的访问信息</li>
                          <li><strong>灵雀应用监控平台</strong>会收集你的访问操作过程和资源加载情况</li>
                          <li><strong>今日头条搜索</strong>会收集你的访问信息</li>
                          <li><strong>字节跳动静态资源库</strong>会收集你的访问信息</li>
                          <li><strong>Tianlicdn</strong>会收集你的访问信息</li>
                          <li><strong>busuanzi统计</strong>会收集你的访问信息</li>
                          <li><strong>腾讯云</strong>会收集你的访问信息</li>
                          <li><strong>腾讯Codesign</strong>会收集你的访问信息</li>
                        <li><strong>阿里cdn（iconfont）</strong>会收集你的访问信息</li>
                        <li><strong>网易云音乐</strong>会收集你的访问信息</li>
                        <li><strong>QQ音乐</strong>会收集你的访问信息</li>
                      </ul>

                      <h3>在访问时，本人仅会处于以下目的，使用你的个人信息：</h3>
                      <ul>
                          <li>用于网站的优化与文章分类，用户优化文章</li>
                          <li>恶意访问识别，用于维护网站</li>
                          <li>恶意攻击排查，用于维护网站</li>
                          <li>网站点击情况监测，用于优化网站页面</li>
                          <li>网站加载情况监测，用于优化网站性能</li>
                          <li>用于网站搜索结果优化</li>
                          <li>浏览数据的展示</li>
                      </ul>

                      <h3>第三方信息获取方将您的数据用于以下用途：</h3>
                      <p>第三方可能会用于其他目的，详情请访问对应第三方服务提供的隐私协议。</p>

                      <h3>你应该知道在你访问的时候不限于以下信息会被第三方获取并使用：</h3>
                      <p>第三方部分为了抵抗攻击、使用不同节点cdn加速等需求会收集不限于以下信息</p>
                      <ul>
                        <li><strong>IP地址 </strong><div id="userAgentIp"></div></li>
                      </ul>
                      <ul>
                        <li><strong>州/大陆 </strong><div id="userAgentState"></div></li>
                      </ul>
                      <ul>
                        <li><strong>国家 </strong><div id="userAgentCountry"></div></li>
                      </ul>
                      <ul>
                        <li><strong>省份 </strong><div id="userAgentProv"></div></li>
                      </ul>
                      <ul>
                        <li><strong>城市 </strong><div id="userAgentCity"></div></li>
                      </ul>
                      <ul>
                        <li><strong>区 </strong><div id="userAgentDistrict"></div></li>
                      </ul>
                      <ul>
                        <li><strong>运营商 </strong><div id="userAgentISP"></div></li>
                      </ul>
                      <ul>
                        <li><strong>设备</strong><div id="userAgentDevice"></div></li>
                      </ul>

                    <h2>二、在评论时如何收集和使用你的个人信息</h2>
                    <p>评论使用的是无登陆系统的匿名评论系统，你可以自愿填写真实的、或者虚假的信息作为你评论的展示信息。<strong>鼓励你使用不易被人恶意识别的昵称进行评论</strong>，但是建议你填写<strong>真实的邮箱</strong>以便收到回复（邮箱信息不会被公开）。在你评论时，会额外收集你的个人信息。</p>

                      <h3>在评论时，本站内置的第三方服务会通过以下或更多途径，来获取你的相关信息：</h3>
                      <ul>
                          <li><strong>weavatar</strong> 会收集你的访问信息、评论填写的个人信息用于展示头像</li>
                      </ul>

                      <h3>在访问时，本人仅会处于以下目的，收集并使用以下信息：</h3>
                      <ul>
                          <li>评论时会记录你的QQ帐号（如果在邮箱位置填写QQ邮箱或QQ号），方便获取你的QQ头像。如果使用QQ邮箱但不想展示QQ头像，可以填写不含QQ号的QQ邮箱。（主动，存储）</li>
                          <li>评论时会记录你的邮箱，当我回复后会通过邮件通知你（主动，存储，不会公开邮箱）</li>
                          <li>评论时会记录你的网址，用于点击头像时快速进入你的网站（主动，存储）</li>
                          <li>评论时会记录你的IP地址，作为反垃圾的用户判别依据（被动，存储，不会公开IP，会公开IP所在城市）</li>
                          <li>评论会记录你的浏览器代理，用作展示系统版本、浏览器版本方便展示你使用的设备，快速定位问题（被动，存储）</li>
                      </ul>
                    
                    <h2>三、如何使用 Cookies 和本地 LocalStorage 存储</h2>
                    <p>本站为实现无账号评论、深色模式切换，不蒜子的uv统计等功能，会在你的浏览器中进行本地存储，你可以随时清除浏览器中保存的所有 Cookies 以及 LocalStorage，不影响你的正常使用。本博客中的以下业务会在你的计算机上主动存储数据：</p>
                    <ul>
                      <li><strong>内置服务</strong></li>
                      <li>评论系统</li>
                      <li>即刻短文</li>
                      <li>鱼塘</li>
                      <li>中控台</li>
                      <li>无障碍服务</li>
                      <li>胶囊音乐</li>
                      <li>帧率显示</li>
                    </ul>
                    <ul>
                      <li><strong>第三方服务</strong></li>
                      <li>百度统计</li>
                      <li>头条搜索</li>
                      <li>busuanzi统计</li>
                      <li>Google统计</li>
                      <li>Google广告</li>
                    </ul>
                    <p>关于如何使用你的Cookies，<Link href="https://se7en-n.github.io/cookies/" target="_blank" rel="noopener noreferrer">Cookies政策</Link> 。</p>
                    <p>关于如何<Link href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform=Desktop&hl=zh-Hans" target="_blank" rel="noopener noreferrer">在Chrome中清除、启用和管理Cookie</Link></p>
                    
                    <h2>四、如何共享、转让你的个人信息</h2>
                    <p>本人不会与任何公司、组织和个人共享你的隐私信息</p>
                    <p>本人不会将你的个人信息转让给任何公司、组织和个人</p>
                    <p>第三方服务的共享、转让情况详见对应服务的隐私协议</p>

                    <h2>五、附属协议</h2>
                    <p>当监测到存在恶意访问、恶意请求、恶意攻击、恶意评论的行为时，为了防止增大受害范围，可能会临时将你的ip地址及访问信息短期内添加到黑名单，短期内禁止访问。此黑名单可能被公开，并共享给其他站点（主体并非本人）使用，包括但不限于：IP地址、设备信息、地理位置。</p>
                    {/* 信息收集JS 来自blog.qjqq.cn */}
                    <pre><code className="language-javascript">代码省略</code></pre>

                </div>

                <div className="w-1/4 pl-4 max-768:w-full max-768:pl-0"><Aside /></div>
            </div>
        </>
    )
}
