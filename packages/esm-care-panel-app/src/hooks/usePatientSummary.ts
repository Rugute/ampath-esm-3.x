import { openmrsFetch } from '@openmrs/esm-framework';
import { type PatientSummary } from '../types/index';
import useSWR from 'swr';

export const usePatientSummary = (patientUuid: string) => {
  const programSummaryUrl = `/ws/rest/v1/amrs/patientSummary?patientUuid=${patientUuid}`;
  const { data, mutate, error, isLoading } = useSWR<{ data: PatientSummary }>(programSummaryUrl, openmrsFetch);

  return {
    data: data?.data ? data?.data : null,
    error,
    isLoading,
  };
};
