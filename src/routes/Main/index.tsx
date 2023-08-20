import { Container, Box, Typography } from "@mui/material";
import ContentList from "../../components/ContentList";

export default function Main() {
  return (
    <Container component="main" maxWidth="md" sx={{ pb: 10 }}>
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h3" align="center">
          Walcron's Microfrontend - Zelda version
        </Typography>
        <br />
        <Typography component="p">
          A 2nd proof of concept on how microfront-end works and how all of
          these component can be tied to work together. Base implementation are
          via
          <strong> Single Spa</strong>. The difference between Single Spa and
          Module Federation is:
        </Typography>
        <Typography component="ul">
          <li>Single Spa is a shell and the latter is a container.</li>
          <li>
            A shell contains only routes and HTML codes as ties. While a
            container has actual framework to tie everything
          </li>
        </Typography>
      </Box>
      <ContentList
        contents={[
          {
            title: "NPM shared library",
            description:
              "Prepare a shared component library to ensure consistent and harmony design. This library should be free from 3rd party libraries, i.e. in our case it's free from Material Design, react router library. If libraries are needed, pass it as props.",
            subDescription:
              'We used "microfrontend-shared-component" that shares the User Interface.',
            links: [
              {
                title: "Learn More",
                href: "https://github.com/yoonghan/walcron-microfrontend-shared",
              },
            ],
          },
          {
            title: "Single Spa",
            description:
              "Similar to module federation, but the shell contains basically no actual logic besides routing, definition and navigation.",
            subDescription:
              "It's easier to use as long the linked framework adheres to mount/unmount and bootstrap. However due to the shell has no logic, it requires more module seperation to communicate between different applications.",
          },
          {
            title: "Seperation of standalone/integration",
            description:
              "Application requires to runs differently in standalone mode vs integration mode.",
            subDescription:
              "In standalone mode there is no mount/unmount/bootstrap. While integration mode doesn't serve the main page.",
            links: [
              {
                title: "No main page",
                href: "https://zelda-auth.walcron.com/",
              },
              {
                title: "Only serves main JS",
                href: "https://zelda-auth.walcron.com/walcron-zelda-auth-react.js",
              },
            ],
          },
          {
            title: "Single Spa - Vite/Rollup",
            description: "Used vite/rollup on Svelte app for the header.",
            subDescription:
              "This was a ride as I do not understand rollup and the cofiguration to get it up with single-spa was quite a journey.",
            links: [
              {
                title: "Learn More",
                href: "https://github.com/yoonghan/zelda-nav-svelte",
              },
            ],
          },
          {
            title: "Context sharing",
            description:
              "As the approach for sharing context between microfrontends(particularly with single-spa) must be using a separated utility microfrontend and framework agnostic.",
            subDescription:
              "It is similar to shared library approach but it's not imported via package.json. Testing in development requires 'a dedicated typescript module declaration' and 'requires extra work to link external application (which is only easy if import-map utility works for the framework used)'",
            links: [
              {
                title: "Learn More",
                href: "https://github.com/yoonghan/zelda-shared-context-rxjs",
              },
            ],
          },
          {
            title: "React Router DOM",
            description:
              "(Simplified) Unlike module federation, react router v6 was easy to be integrated.",
            subDescription: "It just works!",
          },
          {
            title: "Material Design",
            description:
              "Best to import style library dependency independantly.",
            subDescription:
              "I made them independant, rather than a shared module. This might be a good/bad approach as harmonization might not be there but it's framework independant.",
          },
          {
            title: "Authentication",
            description:
              "Best to use a publish/subscription based and via microfrontend utility",
            subDescription:
              "No matter using oAuth, the microfrontend needs to be subscription based and RxJS is suited as it is plain vanilla JS. The approach is to have related application to listen to context change.",
            links: [
              {
                title: "Implementation",
                href: "https://github.com/yoonghan/zelda-shared-context-rxjs",
              },
              {
                title: "Consumers",
                href: "https://github.com/yoonghan/zelda-auth-react/blob/master/src/context/authentication.tsx",
              },
              {
                title: "Consumers",
                href: "https://github.com/yoonghan/zelda-nav-svelte/blob/master/src/App.svelte",
              },
            ],
          },
          {
            title: "Caching",
            description: "Work in progress.",
            subDescription:
              "(Have not implemented) Unlike module federation approach, the root application preserves the url and adding timestamp to url requires a root deployment.",
          },
          {
            title: "Testing",
            description: "Work in progress",
            subDescription:
              "Able to implement Unit testing, but testing applications that relies on another application requires mocking. Integration directly to live external SPA via test unit has not been explored yet.",
            links: [
              {
                title: "Mock Sample",
                href: "https://github.com/yoonghan/zelda-auth-react/blob/master/src/__mocks__/%40walcron/zelda-shared-context.ts",
              },
              {
                title: "Mock Consumer",
                href: "https://github.com/yoonghan/zelda-auth-react/blob/master/src/context/authentication.test.tsx",
              },
            ],
          },
        ]}
      />
    </Container>
  );
}
