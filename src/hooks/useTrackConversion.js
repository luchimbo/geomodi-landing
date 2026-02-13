"use client";
import { useCallback } from "react";
import { usePostHog, useFeatureFlagVariantKey } from "posthog-js/react";

const EXPERIMENT_FLAG = "landing-page-experiment";

export function useTrackConversion() {
	const posthog = usePostHog();
	const variant = useFeatureFlagVariantKey(EXPERIMENT_FLAG);

	const track = useCallback(
		(eventName, properties = {}) => {
			if (!posthog) return;
			posthog.capture(eventName, {
				...properties,
				experiment_variant: variant ?? "unknown",
				experiment_flag: EXPERIMENT_FLAG,
			});
		},
		[posthog, variant],
	);

	return track;
}
