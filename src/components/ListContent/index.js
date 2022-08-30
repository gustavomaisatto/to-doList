import { Title, SubTitle, DateWeek, ListUl, DivTitles, ListItem, Img, DivImg } from "./styles";
import newItem from '../../assets/newItem.svg';
import {Link} from 'react-router-dom';
export default function ListContent(){
    return (
            <>
            <DivTitles>
            <Title>To Do List</Title>
            <SubTitle>This Week</SubTitle>
            </DivTitles>
            {/*<DateWeek>{new Date().toDateString()}</DateWeek>*/}
            <ListUl>
                <ListItem></ListItem>
            </ListUl>
            <DivImg>
                <Link to={'/form'} style={linkStyle}>
            <Img src={newItem} ></Img>
            </Link>
            </DivImg>
            </>
    )
     
}


const linkStyle = {
    textDecoration: "none",
    cursor: 'pointer',
  };