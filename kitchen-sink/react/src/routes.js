import ChipsPage from './pages/ChipsPage';
import ButtonsPage from './pages/ButtonsPage';
import SegmentedPage from './pages/SegmentedPage';
import ContentBlockPage from './pages/ContentBlockPage';
import ListPage from './pages/ListPage';
import CardsPage from './pages/CardsPage';
import CheckboxPage from './pages/CheckboxPage';
import RadioPage from './pages/RadioPage';
import ProgressbarPage from './pages/ProgressbarPage';
import PreloaderPage from './pages/PreloaderPage';
import TogglePage from './pages/TogglePage';
import MenuListPage from './pages/MenuListPage';
import ToolbarPage from './pages/ToolbarPage';
import TabbarPage from './pages/TabbarPage';

const routes = [
  ChipsPage,
  ButtonsPage,
  SegmentedPage,
  ContentBlockPage,
  ListPage,
  CardsPage,
  CheckboxPage,
  RadioPage,
  ProgressbarPage,
  PreloaderPage,
  TogglePage,
  MenuListPage,
  ToolbarPage,
  TabbarPage,
].map((component) => {
  const name = component.name;
  return {
    component,
    path: `/${name
      .split('Page')[0]
      .split('')
      .map((char, index) =>
        char.match(/[A-Z]/) && index !== 0 ? `-${char}` : char
      )
      .join('')
      .toLowerCase()}`,
    title: name
      .split('Page')[0]
      .split('')
      .map((char, index) =>
        char.match(/[A-Z]/) && index !== 0 ? ` ${char}` : char
      )
      .join(''),
  };
});
routes.sort((a, b) => (a.title > b.title ? 1 : -1));

export default routes;
