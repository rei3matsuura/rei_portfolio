'use client'
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Avatar, Box, Button, Container, IconButton, Menu, Toolbar, Tooltip, Typography,Stack} from "@mui/material";
import Image from "next/image";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AdbIcon from '@mui/icons-material/Adb';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { ArrowCircleDownRounded, ExpandMore } from "@mui/icons-material";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import EnergySavingsLeafSharpIcon from '@mui/icons-material/EnergySavingsLeafSharp';
import Link from "next/link";
import IconCard from './IconCard';
import IconCardHobbyContent from './IconCardHobbyContent';


//const pages = ['Top', 'Education', 'Hobby', 'Activities', 'comment'];
// const pages = ['Products', 'Pricing', 'Blog'];
//top
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const pages = ['Top', 'Education', 'Hobby', 'Works', 'Activities'];
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }; //これかも？

  return (
    <div>
      <AppBar position="fixed">
        <Container maxWidth={false} className = 'bg-rei-pink place-content-center'>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="open navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <Link href={`#${page.toLowerCase()}`}>
                      <Typography textAlign="center">
                        <a style={{ color: 'inherit', textDecoration: 'none' }}>
                          {page}
                        </a>
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  href={`#${page.toLowerCase()}`} // ページ名を小文字にしてIDとする
                  sx={{ my: 2, color: 'white', display: 'block' }} //元はwhite
                >
                  {page}
                </Button>
              ))}
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <Home/>
    </div>

  );
}
export default ResponsiveAppBar;

export function Home() {
  return (
    <main className="bg-rei-cream flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}


      {/* <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

      <section className="h-screen border-none flex-row justify-center content-center " id="top">
        <div className="flex w-full max-w-5xl items-center justify-around font-mono lg:flex mb-20">
          {/* <Stack> */}
          <div className="flex flex-col justify-center p-8 text-center">
            <h1 className="text-rei-black text-6xl font-bold mb-3">
              松浦　麗
            </h1>
            <p className="text-rei-black text-4xl font-semibold">
              MATSUURA REI
            </p>
          </div>

          <div className="flex justify-center items-center p-8">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={130} //元は100んでも，next.svgなら180
            height={24} //37でもOK？
            priority
            />
          </div>
        </div>

        <div className="relative flex flex justify-center overflow-hidden rounded-lg bg-rei-pink mb-40">
          {/* <div className="absolute top-2 left-2 rounded-3xl bg-rei-pink py-1 px-2 text-lg font-bold text-rei-cream">
            基本情報
          </div> */}
          <div className="h-60 w-[700px] text-rei-dark text-2xl h-full bg-rei-cream grid place-content-center">
            {/* <div>
              　
            </div> */}
            <div>2001.7.22生</div>
            <div>広島出身（「じゃけん」「じゃけぇ」より「じゃけー」派）</div>
            <div>ポメラニアン好き</div>
          </div>
        </div>
      </section>

      <section className="h-screen border-none flex-row justify-center content-center " id="education">
        <div className="mb-40">
          <h1 className="text-rei-black text-6xl font-bold text-center mb-10">
            Education
          </h1>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownRoundedIcon />}
                aria-controls="edu_JHS-content"
                id="edu_JHS-header"
              >
                <Box display="flex" alignItems="center">
                  <Box
                    className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-rei-pink text-rei-pink mr-2"
                  >
                    <EnergySavingsLeafSharpIcon fontSize="small" />
                  </Box>
                  <Typography>
                    【中学校】近畿大学附属広島中学校東広島校
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  中学受験して入学．ダンス部に所属．
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownRoundedIcon />}
                aria-controls="edu_HS-content"
                id="edu_HS-header"
              >
                <Box display="flex" alignItems="center">
                  <Box
                    className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-rei-blue text-rei-blue mr-2"
                  >
                    <EnergySavingsLeafSharpIcon fontSize="small" />
                  </Box>
                  <Typography>
                    【高校】近畿大学附属広島高等学校東広島校
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  家庭科部部長．近大附属生のトップ合宿に参加．
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownRoundedIcon />}
                aria-controls="edu_UNIV-content"
                id="edu_UNIV-header"
              >
                <Box display="flex" alignItems="center">
                  <Box
                    className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-rei-pink text-rei-pink mr-2"
                  >
                    <EnergySavingsLeafSharpIcon fontSize="small" />
                  </Box>
                  <Typography>
                    【大学】大阪府立大学
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  工学域電気電子系学類に入学．2回生から情報工学課程に所属．3回生後期から知能メディア処理研究グループに所属．
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownRoundedIcon />}
                aria-controls="edu_MST-content"
                id="edu_MST-header"
              >
                <Box display="flex" alignItems="center">
                  <Box
                    className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-rei-blue text-rei-blue mr-2"
                  >
                    <EnergySavingsLeafSharpIcon fontSize="small" />
                  </Box>
                  <Typography>
                    【大学院】大阪公立大学大学院
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  情報工学研究科基幹情報学専攻知能情報学分野に入学．大阪公立大学の理系女子大学院生チームのIRISに所属．
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="h-screen border-none flex-row justify-center content-center " id="hobby">
        <div className="mb-40">
          <h1 className="text-rei-black text-6xl font-bold text-center mb-10">
            Hobby
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {IconCardHobbyContent.map((hobby, index) => (
              <IconCard
                key={index}
                Icon={hobby.Icon}
                Icon_color={hobby.Icon_color}
                bottom_color={hobby.bottom_color}
                hobby_JPN={hobby.hobby_JPN}
                hobby_ENG={hobby.hobby_ENG}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="h-screen border-none flex-row justify-center content-center " id="works">
        <div className="mb-40">
          <h1 className="text-rei-black text-6xl font-bold text-center mb-10">
            Works
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {IconCardHobbyContent.map((hobby, index) => (
              <IconCard
                key={index}
                Icon={hobby.Icon}
                Icon_color={hobby.Icon_color}
                bottom_color={hobby.bottom_color}
                hobby_JPN={hobby.hobby_JPN}
                hobby_ENG={hobby.hobby_ENG}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="h-screen border-none flex-row justify-center content-center " id="activities">
        <div className="mb-40">
          <h1 className="text-rei-black text-6xl font-bold text-center mb-10">
            Activities
          </h1>
          <div>
            Candleなど.なんか。
          </div>
        </div>
      </section>


      {/* <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
