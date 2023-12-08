"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import { Doc } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { useEdgeStore } from "@/lib/edgestore";
import { PartialBlock } from "@blocknote/core";

import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";

interface BannerProps {
  document: Doc<"documents">;
}

export const Banner = ({ document }: BannerProps) => {
  const router = useRouter();
  const { edgestore } = useEdgeStore();

  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  const onRemove = async () => {
    if (document.coverImage) {
      await edgestore.publicFiles.delete({
        url: document.coverImage,
      });
    }

    const partialBlock: PartialBlock[] = JSON.parse(document.content!);
    for (const block of partialBlock) {
      if (block.type === "image") {
        const pattern = "https://files.edgestore.dev/";
        if (block.props?.url?.indexOf(pattern) === 0) {
          await edgestore.publicFiles.delete({
            url: block.props?.url,
          });
        }
      }
    }

    const promise = remove({ id: document._id });

    toast.promise(promise, {
      loading: "ノートを削除しています",
      success: "ノートを削除しました",
      error: "ノートの削除に失敗しました",
    });

    router.push("/documents");
  };

  const onRestore = () => {
    const promise = restore({ id: document._id });

    toast.promise(promise, {
      loading: "ノートを復元しています...",
      success: "ノートを復元しました",
      error: "ノートの復元に失敗しました",
    });
  };

  return (
    <div className="w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center">
      <p>このページはゴミ箱にあります</p>
      <Button
        size="sm"
        onClick={onRestore}
        variant="outline"
        className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
      >
        復元する
      </Button>
      <ConfirmModal onConfirm={onRemove}>
        <Button
          size="sm"
          variant="outline"
          className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
        >
          完全に削除する
        </Button>
      </ConfirmModal>
    </div>
  );
};
