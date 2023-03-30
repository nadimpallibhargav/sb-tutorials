export const HTMLData = [
    {
      topic : "Headings",
      description : 'HTML headings are titles or subtitles that you want to display on a webpage.',
      content : [
        {
            title : "Code",
            code : `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
            `
        },
        {
            title : "Headings Are Important",
            para : ["Search engines use the headings to index the structure and content of your web pages.", "Users often skim a page by its headings. It is important to use headings to show the document structure.", "<h1> headings should be used for main headings, followed by <h2> headings, then the less important <h3>, and so on."],
        },
        {
            title : "CSS",
            list : [
                {
                    li : "A CSS rule set contains a selector and a declaration block.",
                },
                {
                    li : "A CSS rule set contains a selector and a declaration block.",
                    nestedList : ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint dolorum dolor, odio velit id illo! Doloribus iste blanditiis facilis error accusamus magnam nemo, odio enim? Neque quidem rem minus", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint dolorum dolor, odio velit id illo! Doloribus iste blanditiis facilis error accusamus magnam nemo, odio enim? Neque quidem rem minus"],
                },
                {
                    li : "A CSS rule set contains a selector and a declaration block.",
                }
            ],
        },
        {
            title : "Ordered List",
            orderedList : [
                {
                    li : "One"
                },
                {
                    li : "Two",
                    nestedList : ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint dolorum dolor, odio velit id illo! Doloribus iste blanditiis facilis error accusamus magnam nemo, odio enim? Neque quidem rem minus", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint dolorum dolor, odio velit id illo! Doloribus iste blanditiis facilis error accusamus magnam nemo, odio enim? Neque quidem rem minus"],
                },
                {
                    li : "Three"
                }
            ],
        }
      ]
    },

    {   
        topic : "Basics",
        content : [
            {
                title : "Image",
                image : "https://www.w3schools.com/images/mylearning.png",
                alt : "w3"
            },
            {
                title : "Intro2",
                para : ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, officiis quasi! Recusandae vel amet aut. Maiores id cumque laborum, consequuntur animi, qui ad quisquam obcaecati harum tenetur, amet ullam nobis", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, officiis quasi! Recusandae vel amet aut. Maiores id cumque laborum, consequuntur animi, qui ad quisquam obcaecati harum tenetur, amet ullam nobis", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, officiis quasi! Recusandae vel amet aut. Maiores id cumque laborum, consequuntur animi, qui ad quisquam obcaecati harum tenetur, amet ullam nobis"],
            },
            {
                title : "Code",
                code : `
p {
    color: yellow;
    text-align: center;
    font-size:18px
}
                `
            },
            {
                title : "CSS",
                list : [
                    {
                        li : "A CSS rule set contains a selector and a declaration block.",
                    },
                    {
                        li : "A CSS rule set contains a selector and a declaration block.",
                        nestedList : ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint dolorum dolor, odio velit id illo! Doloribus iste blanditiis facilis error accusamus magnam nemo, odio enim? Neque quidem rem minus", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint dolorum dolor, odio velit id illo! Doloribus iste blanditiis facilis error accusamus magnam nemo, odio enim? Neque quidem rem minus"],
                    },
                    {
                        li : "A CSS rule set contains a selector and a declaration block.",
                    }
                ],
                
            },
            {
                title : "Ordered List",
                orderedList : [
                    {
                        li : "One"
                    },
                    {
                        li : "Two",
                        nestedList : ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint dolorum dolor, odio velit id illo! Doloribus iste blanditiis facilis error accusamus magnam nemo, odio enim? Neque quidem rem minus", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint dolorum dolor, odio velit id illo! Doloribus iste blanditiis facilis error accusamus magnam nemo, odio enim? Neque quidem rem minus"],
                    },
                    {
                        li : "Three"
                    }
                ],
            }
          ]
    }
]