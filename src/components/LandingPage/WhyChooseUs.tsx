import { FaPenNib, FaUserGraduate, FaRegClock, FaRegCheckCircle, FaRegComments, FaRegStar } from "react-icons/fa";

const features = [
	{
		title: "Expert Academic Writers",
		description:
			"Our team consists of degree-holding professionals with years of essay writing experience.",
		icon: <FaUserGraduate className="text-[#505081] w-7 h-7 mx-auto mb-4" />,
	},
	{
		title: "100% Original & Plagiarism-Free",
		description:
			"Every essay is custom-written and checked with advanced plagiarism tools.",
		icon: <FaPenNib className="text-yellow-500 w-7 h-7 mx-auto mb-4" />,
	},
	{
		title: "On-Time Delivery",
		description:
			"We guarantee your paper will be delivered before your deadline—no excuses.",
		icon: <FaRegClock className="text-green-500 w-7 h-7 mx-auto mb-4" />,
	},
	{
		title: "Unlimited Revisions",
		description:
			"Request as many edits as you need until you’re 100% satisfied with your essay.",
		icon: <FaRegCheckCircle className="text-[#505081] w-7 h-7 mx-auto mb-4" />,
	},
	{
		title: "24/7 Support",
		description:
			"Our friendly support team is always available to answer your questions and help you place orders.",
		icon: <FaRegComments className="text-orange-500 w-7 h-7 mx-auto mb-4" />,
	},
	{
		title: "Top-Rated Service",
		description:
			"Thousands of students trust us for their essays—see our 5-star reviews!",
		icon: <FaRegStar className="text-yellow-400 w-7 h-7 mx-auto mb-4" />,
	},
];

const WhyChoose = () => {
	return (
		<section className="relative px-4 sm:px-12 md:px-16 py-16 overflow-hidden">
			<div className="absolute inset-0 -z-10">
				<div className="w-full h-full bg-gradient-to-r from-transparent via-yellow-200 to-transparent md:from-transparent md:via-purple-50 md:to-transparent" style={{left: 0, top: 0, position: 'absolute', width: '60%', height: '100%'}} />
			</div>
			<h2 className="text-3xl md:text-4xl text-center font-semibold mb-2 text-black">
				Why Choose{" "}
				<span className="text-[#505081]">Script</span>
				<span className="text-[#505081]">ly</span>?
			</h2>
			<p className=" mb-10 text-base md:text-lg text-black text-center">
				Your trusted partner for essays, research papers, and academic writing
				success.
			</p>

			<div className="grid grid-cols-2 gap-3 md:gap-6 ">
				{features.map((feature, idx) => (
					<div
						key={idx}
						className="bg-white rounded-lg shadow-sm p-6 text-center items-start gap-4"
					>
						<div className="min-w-[40px] mt-1">{feature.icon}</div>
						<div>
							<h4 className="font-semibold text-black text-base mb-1">
								{feature.title}
							</h4>
							<p className="tracking-wide text-gray-600">
								{feature.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default WhyChoose;