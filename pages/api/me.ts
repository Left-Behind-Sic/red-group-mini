import { NextApiRequest, NextApiResponse } from "next";

const me = {
	siteName: "Red Links",
	avatar: "/avatar.jpeg",
	description:
		"<p>Меня зовут Максим, я уже 9 лет занимаюсь веб-разработкой. На данный момент являюсь основателем двух крутых проектов htmllessons.ru и еще одного глобального проекта. Первый, был моей дипломной работой в колледже.</p>" +
		"<p>Как и все, начинал с изучения верстки html, css, js. Затем появилась потребность в изучении Laravel для разработки образовательного проекта.</p>" +
		"<p>Через время я ушел от PHP и перешел на Javascript, так как появилась задача по разработке крупного проекта.</p>" +
		"<p>Основная миссия – создавать крутые продукты, которые будут помогать людям и менять мир. Буду рад, если Вы меня поддержите и подпишитесь на мой канал. Спасибо 😊</p>",
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(me);
}
