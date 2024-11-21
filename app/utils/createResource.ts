export function createResource<T>(promise: Promise<T>) {
  let status = 'pending';
  let result: T | undefined;
  let error: T | Error;

  const promiseToTrack = promise.then(
    (r) => {
      status = 'fulfilled';
      result = r;
    },
    (e) => {
      status = 'rejected';
      error = e;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw promiseToTrack;
      } else if (status === 'rejected') {
        throw error;
      } else if (status === 'fulfilled') {
        return result;
      }
    },
  };
}
