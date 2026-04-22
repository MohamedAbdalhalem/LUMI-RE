import { memo, useRef } from 'react';
import ConfirmModal from './ConfirmModal';
export default memo(function AddressCard({
  id,
  isDefault,
  phone,
  streetAddress,
  city,
  state,
  zipCode,
  country,
  onDelete
}) {
  const modalRef = useRef()
  function startDelete(){
    modalRef.current.showModal()
  }
  async function finishDelete(){
    await onDelete(id)
  }
  return (
    <>
    <ConfirmModal ref={modalRef} onRemove={finishDelete} />
      <div className="rounded-2xl border border-primary bg-base-200/50 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          {/* Left */}
          <div>
            {isDefault && (
              <span className="badge badge-primary badge-sm tracking-wide uppercase font-semibold mb-3">
                Default
              </span>
            )}
      
            <p className="font-medium text-base-content text-lg mb-1">{phone}</p>
      
            <p className="text-sm leading-relaxed text-base-content/80">
              {streetAddress} <br />
              {city}, {state} {zipCode} <br />
              {country}
            </p>
          </div>
      
          {/* Actions */}
          <div className="flex gap-4 sm:flex-col sm:gap-2 text-xs font-semibold uppercase tracking-wider">
            <button
              type="button"
              className="text-base-content/70 hover:text-primary transition underline underline-offset-4 cursor-pointer"
            >
              Edit
            </button>
      
            <button
              type="button"
              onClick={startDelete}
              className="text-error hover:text-error/70 transition underline underline-offset-4 cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
})
