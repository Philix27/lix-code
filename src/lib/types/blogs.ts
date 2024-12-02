export type ICategories = 'Golang' | 'Blockchain' | ' Rust' | 'Solidity' | "Backend";

export type IBlog = {
	title: string;
	description: string;
	slug: string;
	date: string;
	banner: string;
	published: boolean;
	categories: ICategories[];
};