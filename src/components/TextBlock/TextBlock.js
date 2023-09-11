import "./TextBlock.scss";

// Using react-markdown to make text recieved from Strapi readable

const TextBlock = ({content}) => {
    return (  
        <div 
            className="text-block" 
            dangerouslySetInnerHTML={{__html: content}} 
        />
    );
}
 
export default TextBlock;