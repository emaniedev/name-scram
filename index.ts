
const FACTOR = 30;

(() => {

	const rawString = ["13", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "E", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "Y", "*", "*", "A", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "R", "O", "C", "I", "O", "*", "*", "*", "*",
		"*", "*", "*", "*", "A", "*", "*", "L", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "E", "D", "G", "A", "R", "*",
		"*", "*", "*", "*", "*", "*", "*", "N", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]

	const rawString2 = ["13", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "M", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "E", "Y", "R", "A", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "D", "*", "*", "K", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "G", "*", "*", "K", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "A", "I", "L", "E", "N", "*", "*", "*", "*",
		"*", "*", "*", "*", "R", "O", "C", "I", "O", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]

	const rawString3 = ["13", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "E", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "C", "*", "Y", "*", "*", "A", "*", "*", "*", "*", "*",
		"*", "*", "A", "*", "R", "O", "C", "I", "O", "*", "*", "*", "*",
		"*", "*", "S", "*", "A", "*", "*", "L", "*", "*", "*", "*", "*",
		"M", "a", "i", "K", "*", "*", "*", "E", "D", "G", "A", "R", "*",
		"*", "*", "*", "*", "*", "*", "*", "N", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]

	const rawString4 = ["13", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "E", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "Y", "*", "*", "A", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "R", "O", "C", "I", "O", "*", "*", "*", "*",
		"*", "*", "*", "*", "A", "*", "*", "L", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "E", "D", "G", "A", "R", "*",
		"*", "*", "*", "*", "*", "*", "*", "N", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]

	const rawString5 = ["13", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "M", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "E", "Y", "R", "A", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "D", "*", "*", "K", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "G", "*", "*", "K", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "A", "I", "L", "E", "N", "*", "*", "*", "*",
		"*", "*", "*", "*", "R", "O", "C", "I", "O", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]

	const rawString6 = ["13", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "E", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "C", "*", "Y", "*", "*", "A", "*", "*", "*", "*", "*",
		"*", "*", "A", "*", "R", "O", "C", "I", "O", "*", "*", "*", "*",
		"*", "*", "S", "*", "A", "*", "*", "L", "*", "*", "*", "*", "*",
		"M", "a", "i", "K", "*", "*", "*", "E", "D", "G", "A", "R", "*",
		"*", "*", "*", "*", "*", "*", "*", "N", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
		"*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
	const raws: Array<string[]> = [];
	raws.push(rawString);
	raws.push(rawString3);
	raws.push(rawString2);
	raws.push(rawString5);
	raws.push(rawString2);
	raws.push(rawString4);
	raws.push(rawString6);

	raws.push(rawString);
	raws.push(rawString3);
	raws.push(rawString2);
	raws.push(rawString5);
	raws.push(rawString2);
	raws.push(rawString4);
	raws.push(rawString6);

	const div = document.getElementById("bucket");
	div?.setAttribute("style", "display: flex;height: 90vh; width: 75vw;flex-direction: row; flex-wrap: wrap; justify-content: space-evenly");


	let i = 0;
	for (const raw of raws) {

		const canvas = document.createElement("canvas");
		canvas.id = `canvas${i}`;
		canvas.setAttribute("style", "position:unset;margin: auto;padding: 2%; flex-basis: 23%");


		if (!canvas) throw new Error("Browser don't support canvas element!");

		const ctx = canvas.getContext("2d");

		if (!ctx) throw new Error("Can't get the context of the canvas!");


		const s = createScram(raw);
		console.log(s);

		ctx.canvas.width = s.width * FACTOR;
		ctx.canvas.height = s.height * FACTOR;

		ctx.fillStyle = "#FF0000FF"
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		const cellWidth = ctx.canvas.width / s.width;
		const cellHeight = ctx.canvas.height / s.height;

		for (let i = 1; i < s.width; i++) {
			const x = cellWidth * i;
			ctx.strokeStyle = "#181818FF"
			ctx.moveTo(x, 0);
			ctx.lineTo(x, ctx.canvas.height);
		}
		for (let i = 1; i < s.height; i++) {
			const y = cellHeight * i;
			ctx.strokeStyle = "#181818FF"
			ctx.moveTo(0, y);
			ctx.lineTo(ctx.canvas.width, y);
		}

		for (let sy = 0; sy < s.height; sy++) {
			for (let sx = 0; sx < s.width; sx++) {
				const rawp = sx + sy * s.width;
				if (s.raw[rawp] !== undefined && s.raw[rawp][0] !== "*") {
					ctx.fillStyle = "#00FF00FF";
					ctx.fillRect(sx * cellWidth, sy * cellHeight, cellWidth, cellHeight);
					ctx.fillStyle = "#181818FF";
					ctx.font = "15pt Arial";
					const mt = ctx.measureText(s.raw[rawp][0]);
					ctx.fillText(s.raw[rawp][0], sx * cellWidth + cellWidth / 2 - mt.width / 2, sy * cellHeight + cellHeight / 2 + mt.hangingBaseline / 2);
				}

			}
		}
		ctx.stroke();

		div?.appendChild(canvas);
		i++;
	}
	interface Scram {
		raw: string[],
		stride: number,
		width: number,
		height: number,
	}

	function createScram(input: string[]): Scram {
		console.log(input);
		const stride = Number.parseInt(input.slice(0, 1)[0]);
		console.log(stride);
		const raw = input.slice(1, input.length);
		const height = raw.length / stride;

		return {
			raw,
			stride,
			width: stride,
			height
		}
	}
})()
