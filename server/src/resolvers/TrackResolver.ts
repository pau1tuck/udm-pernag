import {
    Arg,
    Ctx,
    Field,
    FieldResolver,
    InputType,
    Int,
    Mutation,
    ObjectType,
    Query,
    Resolver,
    Root,
    UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";
import { User } from "../entities/User";
import { Track } from "../entities/Track";
import { isAdmin, isAuthenticated } from "../utils/permissions";
import { IContext } from "../config/types";

@Resolver()
export class HelloResolver {
    @Query(() => String)
    async hello() {
        return "Hello, Wanker.";
    }
}

@InputType()
class TrackInput {
    @Field()
    artist!: string;
    @Field()
    title!: string;
    @Field()
    version!: string;
    @Field()
    label!: string;
    @Field()
    youTubeId!: string;
}
@ObjectType()
class PaginatedTracks {
    @Field(() => [Track])
    tracks!: Track[];
    @Field()
    hasMore!: boolean;
}
@Resolver(Track)
export class TrackResolver {
    @Query(() => [Track])
    async Tracks(): Promise<Track[]> {
        return await Track.find();
    }

    @Query(() => Track, { nullable: true })
    Track(@Arg("id", () => Int) id: number): Promise<Track | undefined> {
        return Track.findOne(id);
    }

    @Mutation(() => Track)
    @UseMiddleware(isAdmin)
    async createTrack(
        @Arg("input") input: TrackInput,
        @Ctx() { req }: IContext
    ): Promise<Track> {
        return Track.create({
            ...input,
        }).save();
    }

    @Mutation(() => Track, { nullable: true })
    @UseMiddleware(isAdmin)
    async updateTrack(
        @Arg("id", () => Int) id: number,
        @Arg("artist") artist: string,
        @Arg("title") title: string,
        @Arg("version") version: string,
        @Arg("label") label: string,
        @Arg("youTubeId") youTubeId: string,
        @Ctx() { req }: IContext
    ): Promise<Track | null> {
        const result = await getConnection()
            .createQueryBuilder()
            .update(Track)
            .set({ artist, title, version, label })
            .where("id = :id", {
                id,
            })
            .returning("*")
            .execute();

        return result.raw[0];
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAdmin)
    async deleteTrack(
        @Arg("id", () => Int) id: number,
        @Ctx() { req }: IContext
    ): Promise<boolean> {
        await Track.delete({ id });
        return true;
    }
}
